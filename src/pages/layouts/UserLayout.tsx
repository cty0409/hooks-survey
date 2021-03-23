export default (props:any)=> {
  console.log('props',props)
  return (
    <div style={{width:'100%',height:'100%',backgroundColor:'#f9f8f8',position:'absolute'}}>
     { props.children }
    </div>
  );
}