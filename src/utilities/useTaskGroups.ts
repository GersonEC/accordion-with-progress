import { useEffect } from "react";
import { createGlobalState } from "react-use";
import { Task, TaskGroup } from "./model";

const useGlobalTaskGroups = createGlobalState<TaskGroup[]>([]);

export const useTaskGroups = () => {
  const [taskGroups, setTaskGroups] = useGlobalTaskGroups();

  useEffect(() => {
    const fetchTaskGroups = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress"
      );
      const data = (await response.json()) as TaskGroup[];
      setTaskGroups(data);
    };
    fetchTaskGroups();
  }, [setTaskGroups]);

  const getTotalTasksValue = (): number => {
    let response: number = 0;
    taskGroups.forEach((taskGroup) => {
      taskGroup.tasks.forEach((task) => {
        response += task.value;
      });
    });

    return response;
  };

  const getTotalTasksChecked = (): Task[] => {
    let response: Task[] = [];
    taskGroups.forEach((taskGroup) => {
      taskGroup.tasks.forEach((task) => {
        if (task.checked) {
          response.push(task);
        }
      });
    });

    return response;
  };

  const getGroupNameByTaskLabel = (label: string) => {
    let response = "";
    taskGroups.forEach((taskGroup) => {
      const task = taskGroup.tasks.find((task) => task.description === label);
      if (task) {
        response = taskGroup.name;
      }
    });
    return response;
  };
  const setTask = (task: Task) => {
    const groupName = getGroupNameByTaskLabel(task.description);
    const newTaskGroups = [...taskGroups];
    const taskGroupIndex = taskGroups.findIndex(
      (taskGroup) => taskGroup.name === groupName
    );
    const newTaskGroup = newTaskGroups[taskGroupIndex];
    const taskIndex = newTaskGroup.tasks.findIndex(
      (item) => item.description === task.description
    );
    newTaskGroup.tasks[taskIndex] = task;
    setTaskGroups(newTaskGroups);
  };

  const getTaskNormalizedValue = (taskValue: number) => {
    let response = 0;
    const sumAllTasksValue = getTotalTasksValue();

    response = (taskValue * 100) / sumAllTasksValue;

    return response;
  };

  const getTotalValueNormalized = () => {
    let response = 0;
    const totalTasksChecked = getTotalTasksChecked();
    response = totalTasksChecked
      .map((taskChecked) => getTaskNormalizedValue(taskChecked.value))
      .reduce((prevValue, currValue) => prevValue + currValue, 0);

    return response;
  };

  const totalValueNormalized = getTotalValueNormalized();

  return {
    taskGroups,
    setTask,
    totalValueNormalized,
  };
};
