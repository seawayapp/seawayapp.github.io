var mainData = [
    {
        "title": "Notes",
        "subtitle":"Putting the Pieces Together",
        "words": [`The ASP.NET Core platform receives an HTTP
        request and uses the routing system to match the request URL to an endpoint. The endpoint, in this case, is
        the Index action method defined by the Home controller. The method is invoked and produces a ViewResult
        object that contains the name of a view and a view model object. The Razor view engine locates and
        processes the view, evaluating the @Model expression to insert the data provided by the action method into
        the response, which is returned to the browser and displayed to the user. `,
        `A single controller class can define multiple action methods, and the
        convention is to group related actions in the same controller. `,
        `Both action methods invoke the View method without arguments, which may seem odd, but remember
        that the Razor view engine will use the name of the action method when looking for a view file, as explained
        in Chapter 2. That means the result from the Index action method tells Razor to look for a view called
        Index.cshtml, while the result from the RsvpForm action method tells Razor to look for a view called
        RsvpForm.cshtml`
        ]
    },
    {
        "title": "Notes",
        "subtitle":"Data Model",
        "words": [`The data model is the most important part of any ASP.NET Core application. The model is the representation
        of the real-world objects, processes, and rules that define the subject, known as the domain, of the
        application. The model, often referred to as a domain model, contains the C# objects (known as domain
        objects) that make up the universe of the application and the methods that manipulate them. In most
        projects, the job of the ASP.NET Core application is to provide the user with access to the data model and the
        features that allow the user to interact with it.`
        ]
    }
]