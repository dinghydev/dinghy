import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SFTP = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.transfer_for_sftp_resource;',
  },
  _original_width: 76,
  _original_height: 78,
}

export function Sftp(props: DiagramNodeProps) {
  return <Shape {...SFTP} {...props} _style={extendStyle(SFTP, props)} />
}
