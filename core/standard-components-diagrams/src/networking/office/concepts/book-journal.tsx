import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOOK_JOURNAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.book_journal;',
  },
  _original_width: 41,
  _original_height: 49,
}

export function BookJournal(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOOK_JOURNAL}
      {...props}
      _style={extendStyle(BOOK_JOURNAL, props)}
    />
  )
}
