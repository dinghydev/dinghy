import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const XML_WEB_SERVICE = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.xml_web_service',
  _width: 50,
  _height: 50,
}

export function XmlWebService(props: DiagramNodeProps) {
  return <Shape {...XML_WEB_SERVICE} {...props} />
}
