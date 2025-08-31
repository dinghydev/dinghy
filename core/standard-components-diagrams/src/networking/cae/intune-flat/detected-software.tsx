import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DETECTED_SOFTWARE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.detected_software',
  },
  _width: 60,
  _height: 60,
}

export function DetectedSoftware(props: DiagramNodeProps) {
  return (
    <Shape
      {...DETECTED_SOFTWARE}
      {...props}
      _style={extendStyle(DETECTED_SOFTWARE, props)}
    />
  )
}
