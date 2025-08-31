import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RMS_CONNECTOR = {
  _style:
    'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.rms_connector',
  _width: 38,
  _height: 50,
}

export function RmsConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...RMS_CONNECTOR}
      {...props}
      _style={extendStyle(RMS_CONNECTOR, props)}
    />
  )
}
