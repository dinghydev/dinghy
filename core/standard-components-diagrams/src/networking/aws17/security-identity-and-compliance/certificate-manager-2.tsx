import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CERTIFICATE_MANAGER_2 = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.certificate_manager_2;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 63,
}

export function CertificateManager2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CERTIFICATE_MANAGER_2}
      {...props}
      _style={extendStyle(CERTIFICATE_MANAGER_2, props)}
    />
  )
}
