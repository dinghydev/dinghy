import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CERTIFICATE_MANAGER = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.certificate_manager;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 61.5,
}

export function CertificateManager(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CERTIFICATE_MANAGER)} />
}
