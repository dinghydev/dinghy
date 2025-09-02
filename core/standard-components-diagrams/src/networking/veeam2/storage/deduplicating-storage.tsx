import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEDUPLICATING_STORAGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.deduplicating_storage;',
  },
  _original_width: 40,
  _original_height: 11,
}

export function DeduplicatingStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEDUPLICATING_STORAGE}
      {...props}
      _style={extendStyle(DEDUPLICATING_STORAGE, props)}
    />
  )
}
