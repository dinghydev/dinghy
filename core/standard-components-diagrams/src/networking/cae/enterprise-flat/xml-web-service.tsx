import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XML_WEB_SERVICE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.xml_web_service',
  },
  _width: 60,
  _height: 60,
}

export function XmlWebService(props: DiagramNodeProps) {
  return (
    <Shape
      {...XML_WEB_SERVICE}
      {...props}
      _style={extendStyle(XML_WEB_SERVICE, props)}
    />
  )
}
