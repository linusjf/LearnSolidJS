import { JSXElement, createSignal } from "solid-js";
import { Show } from "solid-js";

/** @returns {JSXElement} that toggles Login/Logout buttons */
function Login(): JSXElement {
  const [loggedIn, setLoggedIn] = createSignal<boolean>(false);

  const toggle = () => setLoggedIn(!loggedIn);

  return (
    <>
      <Show
        when={loggedIn()}
        fallback={<button onClick={toggle}>Log in</button>}
      >
        <button onClick={toggle}>Log out</button>
      </Show>
    </>
  );
}

export default Login;
