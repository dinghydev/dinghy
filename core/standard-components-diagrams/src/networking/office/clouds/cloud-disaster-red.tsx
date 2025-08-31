import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_DISASTER_RED = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.cloud_disaster;fillColor=#ff0000;',
  _width: 94,
  _height: 74,
}

export function CloudDisasterRed(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_DISASTER_RED}
      {...props}
      _style={extendStyle(CLOUD_DISASTER_RED, props)}
    />
  )
}
