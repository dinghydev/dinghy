import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROGRESS_TRACKER_2 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#000000;whiteSpace=wrap;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 2,
  _height: 30,
}

export function ProgressTracker2(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRESS_TRACKER_2}
      {...props}
      _style={extendStyle(PROGRESS_TRACKER_2, props)}
    />
  )
}
