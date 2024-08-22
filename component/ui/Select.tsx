import { Check, ChevronDown } from "lucide-react-native";
import { useMemo, useState } from "react";
import type { FontSizeTokens, SelectProps } from "tamagui";
import { Adapt, Select, Sheet, YStack, getFontSize } from "tamagui";

interface SelectItemProps extends SelectProps {
  items: any[];
  width: number;
  label: string;
}

export function SelectItem(props: SelectItemProps) {
  const [val, setVal] = useState("");
  return (
    <Select
      value={val}
      onValueChange={setVal}
      disablePreventBodyScroll
      {...props}
    >
      <Select.Trigger width={props.width} iconAfter={ChevronDown}>
        <Select.Value placeholder={props.label} />
      </Select.Trigger>
      <Adapt when="sm" platform="android">
        <Sheet
          native={!!props?.native}
          modal
          dismissOnSnapToBottom
        //   animationConfig={{
        //     type: "spring",
        //     damping: 20,
        //     mass: 1.2,
        //     stiffness: 250,
        //   }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Select.Content zIndex={200000}>
        <Select.Viewport
          // to do animations:
          // animation="quick"
          // animateOnly={['transform', 'opacity']}
          // enterStyle={{ o: 0, y: -10 }}
          // exitStyle={{ o: 0, y: 10 }}
          minWidth={200}
        >
          <Select.Group>
            <Select.Label>{props.label}</Select.Label>

            {useMemo(
              () =>
                props.items.map((item, i) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item.name}
                      value={item.name.toLowerCase()}
                    >
                      <Select.ItemText>{item.name}</Select.ItemText>

                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                }),

              [props.items]
            )}
          </Select.Group>

          {/* Native gets an extra icon */}

          {props.native && (
            <YStack
              position="absolute"
              right={0}
              top={0}
              bottom={0}
              alignItems="center"
              justifyContent="center"
              width={"$4"}
              pointerEvents="none"
            >
              <ChevronDown
                size={getFontSize((props.size as FontSizeTokens) ?? "$true")}
              />
            </YStack>
          )}
        </Select.Viewport>
      </Select.Content>
    </Select>
  );
}

