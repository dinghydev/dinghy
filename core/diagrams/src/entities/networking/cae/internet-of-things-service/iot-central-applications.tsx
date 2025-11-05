import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IOT_CENTRAL_APPLICATIONS = {
  _style: {
    entity:
      'aspect=fixed;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.mscae.cloud.central;fillColor=#0079D6;pointerEvents=1;',
  },
  _original_width: 44,
  _original_height: 50,
}

export function IotCentralApplications(props: NodeProps) {
  return (
    <Shape
      {...IOT_CENTRAL_APPLICATIONS}
      {...props}
      _style={extendStyle(IOT_CENTRAL_APPLICATIONS, props)}
    />
  )
}
