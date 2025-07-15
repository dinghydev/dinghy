import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ON_OFF_BUTTON_OFF = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios7ui.onOffButton;buttonState=off;strokeColor=#38D145;strokeColor2=#aaaaaa;fillColor=#38D145;fillColor2=#ffffff;',
  _width: 43.5,
  _height: 15,
}

export function OnOffButtonOff(props: DiagramNodeProps) {
  return <Shape {...ON_OFF_BUTTON_OFF} {...props} />
}
