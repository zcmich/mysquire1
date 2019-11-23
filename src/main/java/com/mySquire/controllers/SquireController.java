package com.mySquire.controllers;


import com.mySquire.model.Data;
import com.mySquire.model.QueryModel;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SquireController {


    @GetMapping("/")
    public String entry() {
        return "entry";
    }

 /*   @RequestMapping("/")
    public ModelAndView index () {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("index");
        return modelAndView;
    } */

    @PostMapping()
    @RequestMapping(value = "/endpoint-results" , method = RequestMethod.POST)
    public @ResponseBody Data getResultsFromSparqlEndpoint(@RequestBody Data jsonString) {
        return jsonString;
    }

}