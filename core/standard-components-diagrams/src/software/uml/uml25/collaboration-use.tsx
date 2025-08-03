import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLLABORATION_USE = {
  _style: {
    dependency:
      'html=1;verticalAlign=bottom;labelBackgroundColor=none;endArrow=open;endFill=0;dashed=1;',
  },
}

export function CollaborationUse(props: DiagramNodeProps) {
  return <Dependency {...COLLABORATION_USE} {...props} />
}
