import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OOB_RMP = {
  _style: {
    dependency:
      'endArrow=block;html=1;startArrow=block;startFill=1;endFill=1;strokeColor=#4EFDC0;',
  },
}

export function OobRmp(props: DiagramNodeProps) {
  return <Dependency {...OOB_RMP} {...props} />
}
