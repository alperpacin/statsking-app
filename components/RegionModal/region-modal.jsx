import classes from "./region-modal.module.css";
import { useDispatch } from "react-redux";
import {
  updateRegionOpen,
  updateRegionValue,
} from "@/store/slices/searchBarSlice";
import { useRef } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const Dropdown = ({ items, searchBarState }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleItemClick = (item) => {
    localStorage.setItem("selectedRegion", JSON.stringify(item.url));
    dispatch(updateRegionOpen(false));
    dispatch(updateRegionValue(item));
  };

  return (
    <div className={`${classes["dropdown"]}`} ref={ref}>
      {searchBarState.region.value && (
        <div
          className={`${classes["dropdown-header"]} bg-accent w-12 sm:w-20 py-4 px-4`}
          onClick={onOpen}
        >
          <span className="font-bold text-white text-[14px] sm:text-[16px] ">
            {searchBarState.region.value?.labelShort}
          </span>
        </div>
      )}

      <Modal
        size="2xl"
        backdrop={"blur"}
        shadow="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-secondary",
          body: "px-8 pb-8 bg-secondary",
          header:
            "flex items-center justify-center text-white font-bold bg-secondary",
          backdrop: "backdrop-opacity-10 backdrop-blur",
          closeButton: "mr-4 mt-3",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Regions</ModalHeader>
              <ModalBody className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                {items.map((item) => (
                  <div
                    className={classes["dropdown-item"]}
                    onClick={(e) => {
                      handleItemClick(item);
                      onClose();
                    }}
                    key={item.code}
                  >
                    <span
                      className={`w-100 text-sm text-white p-1 rounded-sm ${
                        item.code === searchBarState.region.value?.code
                          ? "bg-accent text-white font-medium px-2"
                          : "bg-transparent font-light hover:text-accent transition duration-50 ease-in-out"
                      }`}
                    >
                      {item.labelLong}
                    </span>
                  </div>
                ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Dropdown;
