import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GROUPS = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.groups',
  },
  _original_width: 50,
  _original_height: 48,
}

export function Groups(props: DiagramNodeProps) {
  return <Shape {...GROUPS} {...props} _style={extendStyle(GROUPS, props)} />
}
