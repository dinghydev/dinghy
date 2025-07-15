import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SUBSITE_ORANGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.sites.subsite;fillColor=#DA4026;',
  _width: 53,
  _height: 40,
}

export function SubsiteOrange(props: DiagramNodeProps) {
  return <Shape {...SUBSITE_ORANGE} {...props} />
}
