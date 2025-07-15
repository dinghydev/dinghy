import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOOK_JOURNAL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.book_journal;',
  _width: 41,
  _height: 49,
}

export function BookJournal(props: DiagramNodeProps) {
  return <Shape {...BOOK_JOURNAL} {...props} />
}
