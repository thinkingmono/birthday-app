import Person from "./Person"

const List = (props) => {
  return (
    <>
        <div>
            {props.list.length > 0 ? props.list.map((person) => {
                return <Person {...person} key={person.id}/>
            }) : <h3>No buddies added to your list</h3>}
        </div>
    </>
  )
}

export default List