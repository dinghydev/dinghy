import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STORAGE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storage;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function Storage(props: DiagramNodeProps) {
  return <Shape {...STORAGE} {...props} _style={extendStyle(STORAGE, props)} />
}
