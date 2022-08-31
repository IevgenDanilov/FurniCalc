const ModuleInput = () => {
  return (
    <div>
      <label htmlFor="mHeight">Висота, мм:</label>
      <input id="mHeight" name="mHeight" defaultValue="720" />
      <label htmlFor="mDepth">Глибина, мм:</label>
      <input id="mDepth" name="mDepth" defaultValue="540" />
      <label htmlFor="mWidth">Ширина, мм:</label>
      <input list="module width" id="mWidth" name="mWidth" />
      <datalist id="module width">
        <option value="300" />
        <option value="350" />
        <option value="400" />
        <option value="450" />
        <option value="500" />
        <option value="600" />
        <option value="700" />
        <option value="800" />
      </datalist>
      <button>+</button>
    </div>
  );
};

export default ModuleInput;
