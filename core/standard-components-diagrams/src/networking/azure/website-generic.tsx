import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEBSITE_GENERIC = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.website_generic;pointerEvents=1;',
  _width: 50,
  _height: 42.5,
}

export function WebsiteGeneric(props: DiagramNodeProps) {
  return <Shape {...WEBSITE_GENERIC} {...props} />
}
