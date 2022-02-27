(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{656:function(e,t,s){"use strict";s.r(t);var a=s(11),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"无服务：aws-lambda"}},[e._v("无服务：AWS Lambda")]),e._v(" "),s("GitHubWrapper",[s("p",{attrs:{align:"center"}},[s("a",{attrs:{href:"https://icyfenix.cn",target:"_blank"}},[s("img",{attrs:{width:"180",src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/logo-color.png",alt:"logo"}})])]),e._v(" "),s("p",{attrs:{align:"center"}},[s("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://icyfenix.cn"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/Release-v1.svg"}})]),e._v(" "),s("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/License-Apache.svg",alt:"License"}})]),e._v(" "),s("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/DocLicense-CC-red.svg",alt:"Document License"}})]),e._v(" "),s("a",{staticStyle:{display:"inline-block"},attrs:{href:"https://icyfenix.cn/introduction/about-me.html",target:"_blank"}},[s("img",{attrs:{src:"https://raw.githubusercontent.com/fenixsoft/awesome-fenix/master/.vuepress/public/images/Author-IcyFenix-blue.svg",alt:"About Author"}})])])]),e._v(" "),s("p",[e._v("如果你此时并不曾了解过什么是“The Fenix Project”，建议先阅读"),s("a",{attrs:{href:"https://icyfenix.cn/introduction/about-the-fenix-project.html"}},[e._v("这部分内容")]),e._v("。")]),e._v(" "),s("p",[e._v("无服务架构（Serverless）与微服务架构本身没有继承替代关系，它们并不是同一种层次的架构，无服务的云函数可以作为微服务的一种实现方式，甚至可能是未来很主流的实现方式。在这部文档中我们的话题主要还是聚焦在如何解决分布式架构下的种种问题，相对而言无服务架构并非重点，不过为保证架构演进的完整性，笔者仍然建立了无服务架构的简单演示工程。")]),e._v(" "),s("p",[e._v("不过，由于无服务架构原理上就决定了它对程序的启动性能十分敏感，这天生就不利于 Java 程序，尤其不利于 Spring 这类启动时组装的 CDI 框架。因此基于 Java 的程序，除非使用"),s("a",{attrs:{href:"https://icyfenix.cn/tricks/2020/graalvm/substratevm.html"}},[e._v("GraalVM 做提前编译")]),e._v("、将 Spring 的大部分 Bean 提前初始化，或者迁移至"),s("a",{attrs:{href:"https://quarkus.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quarkus"),s("OutboundLink")],1),e._v("这以原生程序为目标的框架上，否则是很难实际用于生产的。")]),e._v(" "),s("h2",{attrs:{id:"运行程序"}},[e._v("运行程序")]),e._v(" "),s("p",[e._v("Serverless 架构的 Fenix's Bookstore 基于"),s("a",{attrs:{href:"https://amazonaws-china.com/cn/lambda/",target:"_blank",rel:"noopener noreferrer"}},[e._v("亚马逊 AWS Lambda"),s("OutboundLink")],1),e._v("平台运行，这是最早商用，也是目前全球规模最大的 Serverless 运行平台。从 2018 年开始，中国的主流云服务厂商，如阿里云、腾讯云都推出了各自的 Serverless 云计算环境，如需在这些平台上运行 Fenix's Bookstore，应根据平台提供的 Java SDK 对 StreamLambdaHandler 的代码进行少许调整。")]),e._v(" "),s("p",[e._v("假设你已经完成"),s("a",{attrs:{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS 注册"),s("OutboundLink")],1),e._v("、配置"),s("a",{attrs:{href:"https://amazonaws-china.com/cn/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS CLI 环境"),s("OutboundLink")],1),e._v("以及 IAM 账号的前提下，可通过以下几种途径，可以运行程序，浏览最终的效果：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("通过 AWS SAM（Serverless Application Model） Local 在本地运行："),s("br"),e._v("AWS CLI 中附有 SAM CLI，但是版本较旧，可通过"),s("a",{attrs:{href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("如下地址"),s("OutboundLink")],1),e._v("安装最新版本的 SAM CLI。另外，SAM 需要 Docker 运行环境支持，可参考"),s("RouterLink",{attrs:{to:"/appendix/deployment-env-setup/setup-docker.html"}},[e._v("此处")]),e._v("部署。"),s("br"),e._v("首先编译应用出二进制包，执行以下标准 Maven 打包命令即可："),s("br")],1),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ mvn clean package\n")])])]),s("p",[e._v("根据 pom.xml 中 assembly-zip 的设置，打包将不会生成 SpringBoot Fat JAR，而是产生适用于 AWS Lambda 的 ZIP 包。打包后，确认已在 target 目录生成 ZIP 文件，且文件名称与代码中提供了 sam.yaml 中配置的一致，在工程根目录下运行如下命令启动本地 SAM 测试：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ sam "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("local")]),e._v(" start-api --template sam.yaml\n")])])]),s("p",[e._v("在浏览器访问："),s("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),s("OutboundLink")],1),e._v("，系统预置了一个用户（user:icyfenix，pw:123456），也可以注册新用户来测试。")])]),e._v(" "),s("li",[s("p",[e._v("通过 AWS Serverless CLI 将本地 ZIP 包上传至云端运行："),s("br"),e._v("确认已配置 AWS 凭证后，工程中已经提供了 serverless.yml 配置文件，确认文件中 ZIP 的路径与实际 Maven 生成的一致，然后在命令行执行：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ sls deploy\n")])])]),s("p",[e._v("此时 Serverless CLI 会自动将 ZIP 文件上传至 AWS S3，然后生成对应的 Layers 和 API Gateway，运行结果如下所示：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ sls deploy\nServerless: Packaging service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nServerless: Uploading CloudFormation "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" to S3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nServerless: Uploading artifacts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nServerless: Uploading "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" bookstore-serverless-awslambda-1.0-SNAPSHOT-lambda-package.zip "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" to S3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("53.58")]),e._v(" MB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nServerless: Validating template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nServerless: Updating Stack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nServerless: Checking Stack update progress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\nServerless: Stack update finished"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nService Information\nservice: spring-boot-serverless\nstage: dev\nregion: us-east-1\nstack: spring-boot-serverless-dev\nresources: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\napi keys:\n  None\nendpoints:\n  GET - https://cc1oj8hirl.execute-api.us-east-1.amazonaws.com/dev/\nfunctions:\n  springBootServerless: spring-boot-serverless-dev-springBootServerless\nlayers:\n  None\nServerless: Removing old "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" artifacts from S3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),s("p",[e._v("访问输出结果中的地址（譬如上面显示的https://cc1oj8hirl.execute-api.us-east-1.amazonaws.com/dev/）即可浏览结果。"),s("br"),e._v("需要注意，由于 Serverless 对响应速度的要求本来就较高，所以不建议再采用 HSQLDB 数据库作来运行程序了，每次冷启动都重置一次数据库本身也并不合理。代码中有提供 MySQL 的 Schema，建议采用 AWS RDB MySQL/MariaDB 作为数据库来运行。")])])]),e._v(" "),s("h2",{attrs:{id:"协议"}},[e._v("协议")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("本作品代码部分采用"),s("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0 协议"),s("OutboundLink")],1),e._v("进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("署名")]),e._v("：在原有代码和衍生代码中，保留原作者署名及代码来源信息。")]),e._v(" "),s("li",[s("strong",[e._v("保留许可证")]),e._v("：在原有代码和衍生代码中，保留 Apache 2.0 协议文件。")])])]),e._v(" "),s("li",[s("p",[e._v("本作品文档部分采用"),s("a",{attrs:{href:"http://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("知识共享署名 4.0 国际许可协议"),s("OutboundLink")],1),e._v("进行许可。 遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("署名")]),e._v("：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。")]),e._v(" "),s("li",[s("strong",[e._v("非商业性使用")]),e._v("：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。")]),e._v(" "),s("li",[s("strong",[e._v("相同方式共享的条件")]),e._v("：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0 国际许可协议进行许可。")])])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);