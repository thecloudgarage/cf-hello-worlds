package gov.cloud.eng.helloworld;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index() {
        return "Hi there, you are seeing a JAVA SEE app running as a OCI compliant container on Tanzu Platform!";
    }

}