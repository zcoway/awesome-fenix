(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{703:function(e,r,o){"use strict";o.r(r);var v=o(11),t=Object(v.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"kube-apiserver源码解读"}},[e._v("kube-apiserver源码解读")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-apiserver/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方介绍"),o("OutboundLink")],1),e._v("：Kubernetes API 服务器验证并配置 API 对象的数据， 这些对象包括 pods、services、replicationcontrollers 等。 API 服务器为 REST 操作提供服务，并为集群的共享状态提供前端， 所有其他组件都通过该前端进行交互。")]),e._v(" "),o("h2",{attrs:{id:"解析："}},[e._v("解析：")]),e._v(" "),o("p",[e._v("kube-apiserver在Kubernetes Control Panel中的作用是管理资源，管理的含义是开放出一系列的"),o("a",{attrs:{href:"https://kubernetes.io/docs/concepts/overview/kubernetes-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes API"),o("OutboundLink")],1),e._v("，提供对资源的操作提供认证、授权、CRUD等接口，供Agent和其他组件使用。可以认为是各个模块的数据交互和通信的枢纽。")]),e._v(" "),o("p",[e._v("这些接口的变动最终都会存储到后端的 Etcd 中（K3S中默认是被Kind代理的SQLIte），kube-apiserver是Kubernetes中直接与Etcd打交道的组件。")]),e._v(" "),o("p",[e._v("在kube-apiserver中，API资源一共有四类，分别是：")]),e._v(" "),o("ul",[o("li",[e._v("核心资源组，路径为："),o("code",[e._v("https://master-ip:6443/api/v1/namespaces/$ns/$resource-name")]),e._v("，如nodes、pods、services等")]),e._v(" "),o("li",[e._v("具名资源组（Named Group），路径为："),o("code",[e._v("https://master-ip:6443/apis/$group-name/$version/namespaces/$ns/$resource-name")]),e._v("，譬如"),o("code",[e._v("/apis/batch/v1/jobs")]),e._v("、"),o("code",[e._v("/apis/extendsions/v2alpha1/namespaces/")]),e._v("。具体的API Groups，可以在对应版本的Kubernetes的"),o("a",{attrs:{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.20/#-strong-api-groups-strong-",target:"_blank",rel:"noopener noreferrer"}},[e._v("API References"),o("OutboundLink")],1),e._v("页面中查询到。")]),e._v(" "),o("li",[e._v("有外部添加的CR[D]资源。")]),e._v(" "),o("li",[e._v("用于暴露系统状态的一些固定端点，譬如"),o("code",[e._v("/metrics")]),e._v("（度量数据）、"),o("code",[e._v("/healthz")]),e._v("（健康数据）、"),o("code",[e._v("/ui")]),e._v("（Dashboard）、"),o("code",[e._v("/logs")]),e._v("（日志）、"),o("code",[e._v("/swaggerapi")]),e._v("（OpenAPI）等")])]),e._v(" "),o("p",[e._v("这四类API资源，是以委托模式，通过DelegationTarget接口，由API Extensions Server、Kube API Server、Aggregator Server三个服务器所提供，它们的作用是：")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("API Extensions Server")]),e._v("包含了对用户自定义扩展资源（CRD/CR）的支持，譬如增加一个CRD，它用到的API Version、Group、Handler、Hook等功能，涉及到一系列的Controller，如Discovery、Naming、NonStructruraSchema、ApiApproval、Finalizing等等。每一个Controller都会在一条goroutine中执行它的Run()方法，具体Controller如下：\n"),o("ol",[o("li",[o("code",[e._v("openapiController")]),e._v("：将CRD资源的变化同步至提供的OpenAPI文档，可通过访问 "),o("code",[e._v("/openapi/v2")]),e._v("进行查看；")]),e._v(" "),o("li",[o("code",[e._v("crdController")]),e._v("：负责将CRD信息注册到apiVersions和apiResources中，两者的信息可通过"),o("code",[e._v("$ kubectl api-versions")]),e._v("和"),o("code",[e._v("$ kubectl api-resources")]),e._v("查看；")]),e._v(" "),o("li",[o("code",[e._v("namingController")]),e._v("：检查CRD对象是否有命名冲突，可在"),o("code",[e._v("crd.status.conditions")]),e._v("中查看；")]),e._v(" "),o("li",[o("code",[e._v("establishingController")]),e._v("：检查CRD是否处于正常状态，可在"),o("code",[e._v("crd.status.conditions")]),e._v("中查看；")]),e._v(" "),o("li",[o("code",[e._v("nonStructuralSchemaController")]),e._v("：检查CRD对象结构是否正常，可在"),o("code",[e._v("crd.status.conditions")]),e._v("中查看；")]),e._v(" "),o("li",[o("code",[e._v("apiApprovalController")]),e._v("：检查CRD是否遵循Kubernetes API声明策略，可在"),o("code",[e._v("crd.status.conditions")]),e._v("中查看；")]),e._v(" "),o("li",[o("code",[e._v("finalizingController")]),e._v("：类似于finalizes的功能，与CR的删除有关；")])])]),e._v(" "),o("li",[o("strong",[e._v("Kube API Server")]),e._v("包含了对传统核心资源（Legacy API，就是以"),o("code",[e._v("/api")]),e._v("开头的资源），譬如Pod、Event、LimitRange、ResourceQuote等等，以及扩展资源（就是以"),o("code",[e._v("/apis")]),e._v("开头的资源，如"),o("code",[e._v("/apis/batch")]),e._v("、"),o("code",[e._v("/aps/extensions")]),e._v("），譬如Jobs、CronJobs、Namspaces的支持，这些都是在Kubernetes中以编码固定（不像CRD那样通过外部配置扩展）的资源，如何与APIServer交互都是由固定的内部函数来完成的。此外，Kube API Server还负责对请求的通用前置处理，如认证、授权等。\n"),o("ol",[o("li",[o("code",[e._v("GenericAPIServer.NewDefaultAPIGroupInfo()")]),e._v("中读取默认的API资源信息。")]),e._v(" "),o("li",[o("code",[e._v("GenericAPIServer.InstallAPIGroups()")]),e._v("中注册API资源，即将根据其定义，生成REST Endpoint供外部访问，并加入到DiscoveryManager中，供外部访问。")])])]),e._v(" "),o("li",[o("strong",[e._v("Aggregator Server")]),e._v("聚合了API Extensions Server的自定义资源和Kube API Server的核心资源，功能类似于一个七层负载均衡，将来自用户的请求拦截转发给其他服务器，并且负责整个APIServer的Discovery功能，与API Extensions Server类似，Aggregator Server中也包含了一系列的Controller，其作用如下：\n"),o("ol",[o("li",[o("code",[e._v("apiserviceRegistrationController")]),e._v("：负责APIServices中资源的注册与删除；")]),e._v(" "),o("li",[o("code",[e._v("availableConditionController")]),e._v("：维护APIServices的可用状态，包括其引用Service是否可用等；")]),e._v(" "),o("li",[o("code",[e._v("autoRegistrationController")]),e._v("：用于保持API中存在的一组特定的APIServices；")]),e._v(" "),o("li",[o("code",[e._v("crdRegistrationController")]),e._v("：负责将CRD GroupVersions自动注册到APIServices中；")]),e._v(" "),o("li",[o("code",[e._v("openAPIAggregationController")]),e._v("：将APIServices资源的变化同步至提供的OpenAPI文档；")])])])]),e._v(" "),o("h2",{attrs:{id:"源码："}},[e._v("源码：")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/tricks/2021/k3s/apiserver/env.html"}},[e._v("K3S启动APIServer的环境准备")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/tricks/2021/k3s/apiserver/bootstrap.html"}},[e._v("K8S-APIServer启动过程")])],1)])])}),[],!1,null,null,null);r.default=t.exports}}]);