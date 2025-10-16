import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FINAL_REPORT_ARCHIVE = {
  _style: {
    entity: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.archive',
  },
  _original_width: 60,
  _original_height: 60,
}

export function FinalReportArchive(props: DiagramNodeProps) {
  return (
    <Shape
      {...FINAL_REPORT_ARCHIVE}
      {...props}
      _style={extendStyle(FINAL_REPORT_ARCHIVE, props)}
    />
  )
}
