from fastapi.staticfiles import StaticFiles
from fastapi import FastAPI, Request, Depends, Form, status
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse

from fastapi.templating import Jinja2Templates
import uvicorn

app = FastAPI() 

app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")
 

@app.get("/", response_class=HTMLResponse)
def home(request: Request):
    return templates.TemplateResponse(request, "index.html")

if __name__ == "__main__":
    uvicorn.run("main:app", host="localhost", port=5500, reload=True) 
    
