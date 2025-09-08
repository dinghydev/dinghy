import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VCLOUD_DIRECTOR_SERVER = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.vcloud_director_server;',
  },
  _original_width: 40,
  _original_height: 52,
}

export function VcloudDirectorServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VCLOUD_DIRECTOR_SERVER}
      {...props}
      _style={extendStyle(VCLOUD_DIRECTOR_SERVER, props)}
    />
  )
}
