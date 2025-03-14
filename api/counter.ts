type IncrementAsynchronousResponse = {
  status: number;
  data: {
    value?: number;
    message?: string;
  };
};

export const incrementAsynchronous = async (
  current: number
): Promise<IncrementAsynchronousResponse> => {
  const time = Math.floor(Math.random() * 1000) + 500; // Random time between 500ms and 1500ms
  const isError = Math.random() > 0.8; // Randomly throw an error

  return new Promise((resolve) => {
    setTimeout(() => {
      if (isError) {
        return resolve({
          status: 400,
          data: {
            message: "Failed to fetch user profile data",
          },
        });
      }

      resolve({
        status: 200,
        data: {
          value: current + 1,
        },
      });
    }, time);
  });
};
