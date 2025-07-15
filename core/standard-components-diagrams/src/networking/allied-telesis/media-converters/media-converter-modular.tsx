import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEDIA_CONVERTER_MODULAR = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/media_converters/Media_Converter_Modular.svg;',
  _width: 70.8,
  _height: 54.6,
}

export function MediaConverterModular(props: DiagramNodeProps) {
  return <Shape {...MEDIA_CONVERTER_MODULAR} {...props} />
}
