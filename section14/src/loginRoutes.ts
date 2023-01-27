import { NextFunction, Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined;
  }
}


function requireAuth(req: Request, res: Response, next: NextFunction) {
  if(req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Not permitted');
}

const router = Router();

router.get('/', (req: Request, res: Response) => {

  if (req.session?.loggedIn) {
    res.send(`
        <div>
          <h2>You are logged in!</h2>
          <a href="/logout">Logout</a>
        </div>
    `);
  } else {
    res.send(`
        <div>
          <h2>You are not logged in!</h2>
          <a href="/login">Login</a>
        </div>
    `);
  }
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email = '', password = '' } = req.body;

  if (email === 'email@mail.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/')
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = { loggedIn: false };
  res.redirect('/')
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected routr, logged in user');
});


export { router };
