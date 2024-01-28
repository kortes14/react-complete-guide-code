import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  //useFetcher is used when we doesnt want to trigger loader of action without actually loading the page
  // under the hood approach
  // cize vhodne napr pre shared component, ako je newsletter
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    //vdaka fetcheru vieme doplnit tieto info
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  //after sign up, tak sa to neredirectne na newsletter form
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
