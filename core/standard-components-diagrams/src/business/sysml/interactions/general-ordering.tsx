import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENERAL_ORDERING = {
  _style:
    'edgeStyle=none;html=1;endArrow=none;verticalAlign=bottom;dashed=1;strokeWidth=2;',
  _width: 160,
  _height: 0,
}

export function GeneralOrdering(props: DiagramNodeProps) {
  return <Dependency {...GENERAL_ORDERING} {...props} />
}
