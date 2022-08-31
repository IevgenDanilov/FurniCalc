// const ModulesList = () => {
//     const [modules, setModules] = useState([]);

//         if(modules.length !== 0) {
//     const listMarkup = modules.map((item) => {
//       const { name, number } = item;
//       return (
//         <li key={item.id} className={styles.item}>
//           {name}: {number}
//           <button
//             type="button"
//             className={styles.button}
//             key={item.id}
//             id={item.id}
//             onClick={() => {
//               onDelete(item.id);
//             }}
//           >
//             Delete
//           </button>
//         </li>
//       );
//     });
//     return <ul>{listMarkup}</ul>;
//   } else {
//     return <p>Nothing found</p>;
//   }
// }

// export default ModulesList;

// <div>
//     <label for="mHeight">Висота, мм:</label>
//     <input id="mHeight" name="mHeight" value="720" />
//     <label for="mDepth">Глибина, мм:</label>
//     <input id="mDepth" name="mDepth" value="540" />
//     <label for="mWidth">Ширина, мм:</label>
//     <input list="module width" id="mWidth" name="mWidth" />
//     <datalist id="module width">
//       <option value="300">
//       <option value="350">
//       <option value="400">
//       <option value="450">
//       <option value="500">
//       <option value="600">
//       <option value="700">
//       <option value="800">
//     </datalist>
//     <button>+</button>
//   </div>
