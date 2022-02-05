export default function showFile(e, props) {
  const reader = new FileReader();
  reader.onload = (e) => {
    props.setValue(e.target.result);
  };
  return reader.readAsText(e.target.files[0]);
}
