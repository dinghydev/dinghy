import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FINAL_REPORT_ARCHIVE = {
  _style: 'html=1;dashed=0;whiteSpace=wrap;shape=mxgraph.dfd.archive',
  _width: 60,
  _height: 60,
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
