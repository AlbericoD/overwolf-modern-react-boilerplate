const log = (message: string, component: string, method: string) => {
  console.info(
    `%c[🐺 overwolf-modern-react-boilerplate][🧰 ${component}][🔧 ${method}][📃 ${message} ]`,
    "background: #262626; color: #e4e4e7; padding: 2px 0; border-radius: 2px; font-weight: bold; border: 1px solid #171717;",
  );
};

export { log };
