import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROGRESS_TRACKER_3 = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#0065FF;whiteSpace=wrap;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 3,
  _height: 30,
}

export function ProgressTracker3(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRESS_TRACKER_3}
      {...props}
      _style={extendStyle(PROGRESS_TRACKER_3, props)}
    />
  )
}
