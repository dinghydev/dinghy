import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSTATION_VISUAL_STUDIO = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.workstation_visual_studio;',
  },
  _width: 53,
  _height: 59,
}

export function WorkstationVisualStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...WORKSTATION_VISUAL_STUDIO}
      {...props}
      _style={extendStyle(WORKSTATION_VISUAL_STUDIO, props)}
    />
  )
}
