import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PROGRESS_SCRUBBER_DISABLED = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.progressScrubberDisabled;dx=0.3;fillColor=#33b5e5;',
  },
  _original_width: 185,
  _original_height: 16,
}

export function ProgressScrubberDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRESS_SCRUBBER_DISABLED}
      {...props}
      _style={extendStyle(PROGRESS_SCRUBBER_DISABLED, props)}
    />
  )
}
