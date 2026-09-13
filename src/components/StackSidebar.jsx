function StackSidebar({

    stack,

    removeFromStack,

    removeAll

}) {


    return (

        <aside className="stack-sidebar">


            <h2>
                Your Stack
            </h2>



            <p className="stack-count">

                {stack.length}

                {" "}

                technologies

            </p>




            {

                stack.length === 0

                ?


                <div className="empty-stack">

                    Your stack is empty

                </div>


                :


                <>


                    <div className="stack-items">


                        {

                            stack.map(item => (


                                <div

                                    className="stack-item"

                                    key={item.id}

                                >



                                    <img

                                        src={item.icon}

                                        alt={item.name}

                                    />



                                    <span>

                                        {item.name}

                                    </span>




                                    <button

                                        type="button"

                                        onClick={() =>
                                            removeFromStack(item.id)
                                        }

                                    >

                                        ×

                                    </button>



                                </div>


                            ))

                        }


                    </div>




                    <button

                        className="remove-all"

                        type="button"

                        onClick={removeAll}

                    >

                        Remove All

                    </button>



                </>


            }



        </aside>


    );


}


export default StackSidebar;