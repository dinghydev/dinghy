import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const XML_WEB_SERVICE = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.xml_web_service',
  },
  _original_width: 50,
  _original_height: 50,
}

export function XmlWebService(props: NodeProps) {
  return (
    <Shape
      {...XML_WEB_SERVICE}
      {...props}
      _style={extendStyle(XML_WEB_SERVICE, props)}
    />
  )
}
