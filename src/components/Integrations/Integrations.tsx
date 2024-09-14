import style from "./Integrations.module.scss";
import IntegrationList from "./IntegrationData";
import IntegrationModal from "./IntegrationModal";
const Integrations = () => {
  return (
    <div className={style.integrationContainer}>
      <h1 className={style.title}>Integrations</h1>
      <div className={style.integrationModalContainer}>
        {IntegrationList.map((integration, index) => (
          <IntegrationModal key={index} {...integration} />
        ))}
      </div>
    </div>
  );
};

export default Integrations;
