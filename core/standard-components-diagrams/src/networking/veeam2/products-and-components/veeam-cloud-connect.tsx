import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_CLOUD_CONNECT = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_cloud_connect;',
  _width: 34,
  _height: 34,
}

export function VeeamCloudConnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...VEEAM_CLOUD_CONNECT}
      {...props}
      _style={extendStyle(VEEAM_CLOUD_CONNECT, props)}
    />
  )
}
