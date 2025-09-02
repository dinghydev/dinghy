import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROFESSIONAL_GRAPHICS_DESKTOP = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.professional_graphics_desktop;',
  },
  _original_width: 50,
  _original_height: 49.97,
}

export function ProfessionalGraphicsDesktop(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROFESSIONAL_GRAPHICS_DESKTOP}
      {...props}
      _style={extendStyle(PROFESSIONAL_GRAPHICS_DESKTOP, props)}
    />
  )
}
