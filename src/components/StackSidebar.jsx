const StackSidebar = ({
  stack,
  removeFromStack,
  removeAll
}) => {
  return (
    <aside className="stack-sidebar">

      <h2>
        Your Stack ({stack.length})
      </h2>


      {
        stack.length === 0 ? (
          <p className="empty-stack">
            No technology added yet.
          </p>
        ) : (

          <div className="stack-items">

            {
              stack.map((item) => (

                <div 
                  className="stack-item"
                  key={item.id}
                >

                  <img 
                    src={item.icon}
                    alt={item.name}
                  />

                  <div>
                    <h4>
                      {item.name}
                    </h4>

                    <p>
                      {item.category}
                    </p>
                  </div>


                  <button
                    onClick={() =>
                      removeFromStack(item.id)
                    }
                  >
                    ✕
                  </button>


                </div>

              ))
            }

          </div>

        )
      }

    {
    stack.length > 0 && (
    <button
        className="remove-all-btn"
        onClick={removeAll}
    >
        Remove All
    </button>
    )
    }
    </aside>
  );
};


export default StackSidebar;